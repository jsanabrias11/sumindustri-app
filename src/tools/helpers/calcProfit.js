
export function calcProfit(data) {

    // dataCleaning.
    function dataCleaning(data) {        
        for (let item in data) {

            if (data[item]['type'] === 'text') continue;

            if (data[item]['value'] === '') {
                data[item]['value'] = 0;
            }

            if (typeof (data[item]['value']) === 'string') {
                data[item]['value'] = Number(data[item]['value']);
            }
        }
        return data;
    }

    function result() {
        const dataClean = dataCleaning(data);

        const {
            productCost,
            importCost,
            nationalWithholding,
            billInv,
            percentageProductSale,
            additionalCotsNote,
            additionalCots,
        } = dataClean;

        // * Retención Nacional
        const getNationalWithholding = () => {
            if (billInv.value !== 0) {
                return (billInv.value * nationalWithholding.value) / 100;
            }
            return (productCost.value * nationalWithholding.value) / 100;
        }

        // * Venta del producto(%)
        const getProductSale = () => {
            const percentageProductSaleResult = (productCost.value * percentageProductSale.value) / 100;
            return productCost.value + percentageProductSaleResult;
        }

        const nationalWithholdingResult = getNationalWithholding();
        const productSaleResult = getProductSale();
        const totalExpensesResult = productCost.value + nationalWithholdingResult +  importCost.value + additionalCots.value

        // TODO Se calcula (productCost + nationalWithholding + importCost) - MontodeVenta)

        const profitResult = productSaleResult - (productCost.value + nationalWithholdingResult + importCost.value + additionalCots.value);


        console.log('nationalWithholdingResult: ', nationalWithholdingResult);
        console.log('productSaleResult: ', productSaleResult);
        console.log('Profit - ganacia total', profitResult);

        return {
            productCost : Math.round(productCost.value),
            importCost : importCost.value.toFixed(2),
            billInv : billInv.value.toFixed(2),
            percentageProductSale : percentageProductSale.value.toFixed(2),
            additionalCotsNote : additionalCotsNote.value,
            additionalCots : additionalCots.value.toFixed(2),
            nationalWithholdingResult : nationalWithholdingResult.toFixed(2),
            productSaleResult : productSaleResult.toFixed(2),
            totalExpensesResult : totalExpensesResult.toFixed(2),
            profitResult : Math.round(profitResult),
        }
    }

    return result();

    

    // dataCleaning(data)
    // console.log(nationalWithholdingResult());

    // const valueNumber = event.target.value === '' ? '' : Number(event.target.value)


    // * Costo de importación.
    // Se evaluara primero si viene el monto en dolares o en porcentaje.
    // Se limpia a dolares y es el que se usa.
    // ? Porcentaje:
    // TODO        


    // * Retención Nacional  
    // ? Si Factura Benitno tiene datos, se realiza:
    // TODO Se saca el porcentaje 'nationalWithholding' a 'billInv' 
    // ? Si no:
    // TODO Se saca el porcentaje 'nationalWithholding' a 'importCost'
    // ! Lista.

    // * Monto Factura Benitno
    // Ver si se pondra el porcentaje o el monto en dolares
    // ? Monto en dolares:
    // TODO se usa para realizar calculo de la Retención Nacional
    // ? Si no:
    // TODO se saca el porcentaje 'billInv' a 'importCost'
    // !Lista.

    // * Venta del producto(%)
    // Ver si se pondra el porcentaje o el monto en dolares
    // ? Monto en dolares:
    // TODO se usa para realizar calculo del Profit total.
    // ? Si no:
    // TODO se saca el porcentaje 'percentageProductSale' a 'importCost' = 
    // ! NuevaVariable: MontodeVenta
    // ! Lista

    // * Gastos adicionales
    // TODO si hay gastos se procesa en el Profit total.

    // * Ganancia Total
    // TODO Se calcula (productCost + nationalWithholding + importCost) - MontodeVenta)







}