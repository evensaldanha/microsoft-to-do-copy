import '../Style/detalheDoPrazo.css';


export default function DetalheDoPrazo() {
    return (
        <div className="detalhe-do-prazo">
            <label>Semanal
                <input type="checkbox" name='prazos-checbox' value='semanal' />
            </label>
            <p>
                <label>Mensal
                    <input type="checkbox" name="prazos-mensais" value="mensal" />
                </label>
            </p>
            <div>
            </div>
        </div>
    )
}