from fastapi import APIRouter
from app.models.schemas import ClassifyRequest, ClassifyResponse
from app.services import classifier as classifier_service

router = APIRouter()


@router.post("", response_model=ClassifyResponse)
def classify_ticket(request: ClassifyRequest):
    result = classifier_service.classify(
        title=request.title,
        description=request.description,
        user_category=request.category,
    )
    return ClassifyResponse(**result)
