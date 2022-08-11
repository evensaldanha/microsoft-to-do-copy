import { useState } from "react"

export default function DetalheDoPrazo() {
    const [day, setDay] = useState(0)

    return (
        <div className="detalhe-do-prazo">
            <label>Semanal
                <input type="checkbox" name='parazos-checbox' value='semanal' />
            </label>

            <p>
                <label>Mensal
                    <input type="checkbox" name='parazos-checbox' value='mensal' />
                </label>
            </p>
            <div>
                <div>{day}</div>

                <button onClick={() => setDay((oldDay) => oldDay + 1)}>+</button>

                <button onClick={() => setDay((oldDay) => oldDay - 1)}>-</button>
            </div>
        </div>
    )
}