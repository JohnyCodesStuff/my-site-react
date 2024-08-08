import React from "react";

const HandleEvent = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('on submit')
    }

    return (
        <div>
            <h1>Obsługa zdarzeń</h1>
            <form onSubmit={onSubmit}>
                <button>Wyślij</button>
            </form>
        </div>
    )
}

export default HandleEvent
