import {render, screen} from "@testing-library/react";
import {Header} from "./Header";
import React from "react";

test('renders Header with title', () => {
    const DEFAULT_PROPS = {
        projects: [{id: 1, name: "Project 1", date: "May 13, 2022, 11:23pm"}],
        addNewProject: jest.fn(),
    }
    const element = render(<Header {...DEFAULT_PROPS} />);
    expect(element).toBeDefined();
    const title = screen.getByText(/MY PROJECTS/i);
    expect(title).toBeInTheDocument();
});
