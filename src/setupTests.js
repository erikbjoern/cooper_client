import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//expect(element).toHaveTextContent(/react/i)

import '@testing-library/jest-dom/extend-expect';
