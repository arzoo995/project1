export async function GET() {
    const designCourses = [
      { id: 1, name: "Graphic Design", description: "Learn design basics.", duration: "3 months", level: "Beginner" },
      { id: 2, name: "UI/UX Design", description: "Master user interface design.", duration: "4 months", level: "Intermediate" },
      { id: 3, name: "3D Modeling", description: "Create stunning 3D visuals.", duration: "6 months", level: "Advanced" },
    ];
    return Response.json(designCourses);
  }
  