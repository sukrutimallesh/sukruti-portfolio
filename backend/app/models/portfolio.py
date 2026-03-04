"""Data models for portfolio information."""

from typing import Dict, List

from pydantic import BaseModel


class Experience(BaseModel):
    """Work experience entry."""

    company: str
    role: str
    location: str
    period: str
    highlights: List[str]
    technologies: List[str]


class Project(BaseModel):
    """Project entry."""

    title: str
    description: str
    technologies: List[str]
    highlights: List[str]


class Education(BaseModel):
    """Education entry."""

    institution: str
    degree: str
    location: str
    period: str
    gpa: str
    coursework: List[str]


class Certification(BaseModel):
    """Certification entry."""

    name: str
    issuer: str


class ContactMessage(BaseModel):
    """Contact form submission."""

    name: str
    email: str
    subject: str
    message: str


class ProfileInfo(BaseModel):
    """Basic profile information."""

    name: str
    title: str
    tagline: str
    summary: str
    email: str
    linkedin: str
    github: str
    location: str


class PortfolioData(BaseModel):
    """Complete portfolio data response."""

    profile: ProfileInfo
    experiences: List[Experience]
    projects: List[Project]
    education: List[Education]
    skills: Dict[str, List[str]]
    certifications: List[Certification]
