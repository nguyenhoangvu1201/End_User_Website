import { render, screen, fireEvent } from "@testing-library/react";
import CardCampus from "@/components/about/CardCampus";
import { Campus } from "@/data/campusesData";

describe("CardCampus", () => {
  const campus: Campus = {
    title: "Test Campus",
    description: "Test description",
    fullDescription: "Full desc",
    image: "/test.jpg",
    mapButton: "Xem Map",
    color: "from-blue-500 to-cyan-500",
    stats: [
      { label: "Diện tích", value: "30ha", icon: "🏢" },
      { label: "Sinh viên", value: "10,000", icon: "👥" },
    ],
    address: "Test address",
    locationDescription: "Test location",
    mapEmbed: "https://test.com",
    city: "Test City",
    phone: "0123456789",
    website: "test.com",
    established: "2020"
  };
  it("renders campus info", () => {
    render(
      <CardCampus
        campus={campus}
        index={0}
        hoveredCard={null}
        setHoveredCard={() => {}}
        visible={true}
        onMapClick={() => {}}
      />
    );
    expect(screen.getByText("Test Campus")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByLabelText(/Thông tin campus/)).toBeInTheDocument();
  });
  it("calls onMapClick when map button clicked", () => {
    const onMapClick = jest.fn();
    render(
      <CardCampus
        campus={campus}
        index={0}
        hoveredCard={null}
        setHoveredCard={() => {}}
        visible={true}
        onMapClick={onMapClick}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /Xem bản đồ campus/i }));
    expect(onMapClick).toHaveBeenCalled();
  });
  it("sets hoveredCard on mouse enter/leave", () => {
    const setHoveredCard = jest.fn();
    render(
      <CardCampus
        campus={campus}
        index={1}
        hoveredCard={null}
        setHoveredCard={setHoveredCard}
        visible={true}
        onMapClick={() => {}}
      />
    );
    fireEvent.mouseEnter(screen.getByLabelText(/Thông tin campus/));
    expect(setHoveredCard).toHaveBeenCalledWith(1);
    fireEvent.mouseLeave(screen.getByLabelText(/Thông tin campus/));
    expect(setHoveredCard).toHaveBeenCalledWith(null);
  });
}); 