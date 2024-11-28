import React from 'react'

export default function Counter({ color }: { color: string }) {
    const [count, setCount] = React.useState(0)

    const updateCount = () => {
        setCount(count => count + 1)
    }

    return (
        <button color={color} onClick={updateCount}>Counter: {count}</button>
    )
}
