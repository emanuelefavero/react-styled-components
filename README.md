# React Styled Components

This is a simple example of how to use styled components in React.

## RUN APP

    ```bash
    npm i
    npm start
    ```

## TIPS

    - Install:
    npm i styled-components

    - Import:
    import styled, { keyframes } from 'styled-components'

## USAGE

    ```react
    const Container = styled.div`
            min-height: 100vh;
        `

    const fadeAnimation = keyframes`
        0% { opacity: 0;  }
        100% { opacity; 1; }
    `

    const Button = styled.button`
        font-size: 2rem;

        animation: ${fadeAnimation} infinite 0.5s ease-in-out alternate;
        &:hover {
            color: red;
        }
    `

    return (
        <Container>
            <Button onClick={() => alert('Hello')}>Hello</Button>
        </Container>
    )
    ```
