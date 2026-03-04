"""API route controllers for portfolio endpoints."""

from fastapi import APIRouter, HTTPException, status

from app.models.portfolio import ContactMessage, PortfolioData
from app.services.portfolio_service import PortfolioService

router = APIRouter(prefix="/api", tags=["portfolio"])


@router.get("/portfolio", response_model=PortfolioData)
async def get_portfolio():
    """Return complete portfolio data."""
    return PortfolioService.get_portfolio()


@router.get("/profile")
async def get_profile():
    """Return profile information."""
    return PortfolioService.get_profile()


@router.get("/experiences")
async def get_experiences():
    """Return work experiences."""
    return PortfolioService.get_experiences()


@router.get("/projects")
async def get_projects():
    """Return project information."""
    return PortfolioService.get_projects()


@router.get("/education")
async def get_education():
    """Return education information."""
    return PortfolioService.get_education()


@router.get("/skills")
async def get_skills():
    """Return skills grouped by category."""
    return PortfolioService.get_skills()


@router.post("/contact", status_code=status.HTTP_201_CREATED)
async def submit_contact(message: ContactMessage):
    """Handle contact form submission."""
    if not message.name or not message.email or not message.message:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Name, email, and message are required.",
        )
    return {"status": "success", "message": "Thank you for reaching out! I'll get back to you soon."}
