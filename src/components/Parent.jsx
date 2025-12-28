import { Child1 } from "./child1";
import { Child2 } from "./child2";
export const Parent = ({ theme, setTheme }) => { 
    return (
        <div>
            <Child1 setTheme={setTheme}  />
            <Child2 theme={theme}  />
        </div>
    )
}