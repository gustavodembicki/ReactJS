import { decode } from 'html-entities';
import { LINES } from "../constants/constants";
import "./Lines.css";

interface LinesProps {
    lines: number[],
    handleClick: (event: any) => void
}

export function Lines({ lines, handleClick }: LinesProps) {
    function buttonLineCreate(line: number) {
        let button = LINES[line].map((values: any) => {
            let value = typeof(values.value) == 'string' ? decode(values.value) : values.value;

            return (
                <button className={values.class} key={`button-${values.value}`} onClick={handleClick} value={value}>
                    {value}
                </button>
            );
        });

        return button;
    }

    function lineCreate(lines: number[]): any {
        let line = lines.map((line: number) => {
            return (
                <div className="calc-button-row" key={`row-${line}`}>
                    {buttonLineCreate(line)}
                </div>
            );
        });

        return line;
    }

    return lineCreate(lines);
}