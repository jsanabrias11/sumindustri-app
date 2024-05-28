import { useEffect, useState } from "react";
import GraphicDoughnut from "../../components/GraphicDoughnut"

export const CalcResume = ({ data, fnModal } ) => {
    // console.log(fnModal);
    const {
        productCost,
        importCost,
        billInv,
        percentageProductSale,
        additionalCotsNote,
        additionalCots,
        nationalWithholdingResult,
        productSaleResult,
        totalExpensesResult,
        profitResult,
    } = data;



    const DetailResume = ({ color, title, amount }) => {
        return (
            <div className="flex justify-between items-center mb-3">
                <span
                    className="w-2 h-7 rounded"
                    style={{ backgroundColor: color }}
                ></span>
                <p className={`w-2/3 text-left ml-4 text-sm 
                            ${amount == 0 ? 'line-through text-gray-500' : ''} `}
                >
                    {title}
                </p>
                <p className={`w-1/3 px-2 bg-white text-dark rounded font-sans text-right 
                            ${amount == 0 ? 'bg-gray-600' : ''}`}
                >
                    {amount}
                </p>
            </div>
        )
    };


    return (
        <div className="flex flex-col items-center justify-between  h-calc136">
            <div className="text-center text-dark">
                <h2 className="text-2xl font-semibold pt-2">Ganancia Total</h2>

                <div className=" relative p-4 w-[300px] h-[300px]">
                    <GraphicDoughnut />
                    <span className="text-3xl font-sans absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {profitResult}
                    </span>
                </div>
            </div>

            <div className="flex flex-col bg-dark/95 w-full h-full p-8 text-white rounded-t-[60px]">
                <div className="flex-grow">
                    <DetailResume
                        color={'#c026d3'}
                        title={'Costo del producto'}
                        amount={productCost}
                    />

                    <DetailResume
                        color={'#082f49'}
                        title={'Costo de importación'}
                        amount={importCost}
                    />

                    <DetailResume
                        color={'#57534e'}
                        title={'Factura Benitno'}
                        amount={billInv}
                    />

                    <DetailResume
                        color={'#FF0000'}
                        title={'Retención a pagar'}
                        amount={nationalWithholdingResult}
                    />

                    <DetailResume
                        color={'#0891b2'}
                        title={'Gastos adicionales'}
                        amount={additionalCots}
                    />

                    <DetailResume
                        color={'#450a0a'}
                        title={'Gastos totales compra'}
                        amount={totalExpensesResult}
                    />

                    <DetailResume
                        color={'#65a30d'}
                        title={'Precio venta del producto'}
                        amount={productSaleResult}
                    />
                </div>

                <div className="pt-4">
                    <button
                        className="w-full py-1 text-lg text-white bg-primary
                    border-2 border-solid rounded border-primary font-semibold hover:text-dark hover:bg-white 
                    shadow-md"
                        onClick={() => fnModal(false)}
                    >
                        Recalcular
                    </button>

                </div>
            </div>
        </div>
    )
}
