from pydantic import BaseModel
from typing import List, Optional


class ClassifyRequest(BaseModel):
    title: str
    description: str
    category: Optional[str] = None


class ClassifyResponse(BaseModel):
    priority: str          # low / medium / high / critical
    category: str
    confidence: float


class SuggestRequest(BaseModel):
    ticketId: Optional[str] = None
    title: str
    description: str
    category: Optional[str] = None
    limit: Optional[int] = 3


class SuggestResponse(BaseModel):
    articleIds: List[str]


class SummarizeRequest(BaseModel):
    ticketId: Optional[str] = None
    title: str
    description: str
    resolutionNotes: Optional[str] = None


class SummarizeResponse(BaseModel):
    summary: str


class HealthResponse(BaseModel):
    status: str
    service: str
    version: str
    model_loaded: bool
