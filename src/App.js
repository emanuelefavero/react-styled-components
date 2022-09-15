import styled, { keyframes } from 'styled-components'

function App() {
    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 100vh;
    `

    const growAnimation = keyframes`
        0% { font-size: 2rem;  }
        100% { font-size: 2.12rem; }
    `

    const Button = styled.button`
        background-color: #1f243f;
        color: rgb(26, 101, 240);

        font-size: 2rem;
        font-family: monospace;

        padding: 0.4rem 1rem;
        border-radius: 0.6rem;
        cursor: pointer;
        border: none;

        transition: all 0.2s linear;
        animation: ${growAnimation} infinite 0.5s ease-in-out alternate;
        &:hover {
            background-color: #252b4c;
            color: rgb(57, 124, 248);

            animation: none;
        }
    `

    return (
        <Container>
            <Button onClick={() => alert('Hello')}>Hello</Button>
        </Container>
    )
}

export default App
