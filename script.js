function calcularPropina() {
    console.log("25")
    const totalCuenta = Number(document.getElementById('cuenta').value);
    const propina = Number(document.getElementById('propina').value);
    const total_cuenta_pagar = document.getElementById('total-cuenta-pagar');
    const total_propina_pagar = document.getElementById('total-propina-pagar');
    const total_pago_pagar = document.getElementById('total-pago-pagar');

    const valorPropina = totalCuenta * (propina / 100);
    const valorTotal = valorPropina + totalCuenta;

    if (propina > 100) {
        alert('El valor de propina sobrepasa el 100%')
        total_cuenta_pagar.textContent = `-Total compra: ${totalCuenta}`;
        total_propina_pagar.textContent = `-Propina: Invalido`;
        total_pago_pagar.textContent = `-Total a pagar: ${totalCuenta}`;
    } else {
        total_cuenta_pagar.textContent = `-Total compra: ${totalCuenta}`;
        total_propina_pagar.textContent = `-Propina: ${valorPropina}`;
        total_pago_pagar.textContent = `-Total a pagar: ${valorTotal}`;
    }  
}

