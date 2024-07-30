// import trashBtn from "../../assets/icons/trash-icon.svg";

export const getStyles = () => {
	return `
    <style>
    :host {
        display: flex;
        align-items: center;
        padding: 0 3.125rem .5rem;
    }

        .todo {
            display: flex;
            width: 100%;
            max-width: 32.5rem;
            align-items: center;
            position: relative;
            padding-right: .5rem;
            gap: 1rem;
        }

        .todo__checkbox {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .todo__checkbox_container {
            position: relative;
            width: 1.625rem;
            height: 1.625rem;
            display: block;
            background: transparent;
            cursor: var(--cursor-pointer);
            border: .0625rem solid var(--accent-color);
            border-radius: .125rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        .todo__checkbox_container input:checked ~ .todo__checkmark {
            background-color: var(--accent-color);
        }

        .todo__checkmark {
            position: absolute;
            top: 0;
            left: 0;
            width: 1.625rem;
            height: 1.625rem;
        }

        .todo__checkmark::after {
            position: absolute;
            content: '';
            display: none;
            width: .8rem;
            height: .4325rem;
            top: 0;
            bottom: .25rem;
            left: 0;
            right: 0;
            margin: auto;
            border-bottom: .125rem solid white;
            border-left: .125rem solid white;
            transform: rotate(-53deg);

        }

        .todo__checkbox_container input:checked ~ .todo__checkmark::after {
            display: block;
        }

        .todo__treshbtn {
            outline: none;
            border: none;
            width: 1.125rem;
            height: 1.125rem;
            right: .5rem;
            position: absolute;
            background-color: var(--primary-color);
            transition: background-color .2s ease;
            cursor: var(--cursor-pointer)
        }

        .todo__treshbtn:hover {
            background-color: var(--delete-color);
        }

        .todo__treshbtn:hover {
            color: var(--delete-color);
        }

        .todo__text {
            font: var(--font-medium);
        }
        
        .todo__text_done {
            color: var(--disabled-color);
            text-decoration: line-through;
        }
        
        .todo__text_failed {
            color: var(--delete-color);
            text-decoration: line-through;
        }
        
        .timer_failed {
            color: var(--delete-color);
        }
    </style>
    `;
};
