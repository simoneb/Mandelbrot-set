/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import App from "../src/App.svelte";

test("should render", () => {
    const result = render(App, { props: { version: "", test: true } });
    expect(result.getByText(/\w*Mandelbrot set generator\w*/)).toBeInTheDocument();
});