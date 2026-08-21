import pickle
import os
import logging
from app.config import MODEL_PATH, VECTORIZER_PATH

logger = logging.getLogger(__name__)

_model = None
_vectorizer = None


def _load_model():
    global _model, _vectorizer
    if _model is None:
        try:
            with open(MODEL_PATH, "rb") as f:
                _model = pickle.load(f)
            with open(VECTORIZER_PATH, "rb") as f:
                _vectorizer = pickle.load(f)
            logger.info("✅ ML model and vectorizer loaded successfully.")
        except Exception as e:
            logger.warning(f"⚠️  Could not load ML model: {e}. Falling back to heuristic.")
            _model = None
            _vectorizer = None


def _heuristic_classify(title: str, description: str) -> tuple[str, float]:
    """Keyword-based fallback classifier matching the frontend's classifyTicket() logic."""
    text = (title + " " + description).lower()

    critical_keywords = [
        "down", "outage", "breach", "crash", "critical", "emergency",
        "production", "server down", "data loss", "security", "unauthorized",
        "complete failure", "all users", "entire", "cannot access",
    ]
    high_keywords = [
        "slow", "error", "fail", "not working", "broken", "corrupted",
        "cannot", "unable", "blocked", "vpn", "login", "antivirus",
        "high priority", "urgent", "important",
    ]
    medium_keywords = [
        "issue", "problem", "need", "request", "access", "permission",
        "install", "setup", "configure", "update", "medium",
    ]

    critical_count = sum(1 for kw in critical_keywords if kw in text)
    high_count = sum(1 for kw in high_keywords if kw in text)
    medium_count = sum(1 for kw in medium_keywords if kw in text)

    if critical_count >= 2:
        return "critical", min(0.55 + critical_count * 0.05, 0.95)
    elif critical_count == 1:
        return "high", 0.65
    elif high_count >= 2:
        return "high", min(0.55 + high_count * 0.05, 0.90)
    elif high_count == 1:
        return "medium", 0.60
    elif medium_count >= 1:
        return "medium", 0.55
    else:
        return "low", 0.50


def classify(title: str, description: str, user_category: str = None) -> dict:
    """
    Classify ticket priority using the trained ML model (model.pkl + vectorizer.pkl).
    Falls back to keyword heuristics if the model is unavailable.
    """
    _load_model()

    category = user_category or "IT Support"
    combined_text = f"{title} {description}"

    if _model is not None and _vectorizer is not None:
        try:
            vec = _vectorizer.transform([combined_text])
            predicted = _model.predict(vec)[0]
            probas = _model.predict_proba(vec)[0]
            confidence = float(max(probas))
            priority = predicted.lower()
            # Normalise label variants
            priority = priority.strip()
            if priority not in ("low", "medium", "high", "critical"):
                priority = "medium"
            return {"priority": priority, "category": category, "confidence": round(confidence, 4)}
        except Exception as e:
            logger.warning(f"Model prediction failed: {e}. Using heuristic fallback.")

    priority, confidence = _heuristic_classify(title, description)
    return {"priority": priority, "category": category, "confidence": round(confidence, 4)}


def is_model_loaded() -> bool:
    _load_model()
    return _model is not None and _vectorizer is not None
