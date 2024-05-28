import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalcResume, calcProfit } from '../';
import { Toggle } from '../../components/toggleComponent/Toggle';
import { ModalMain } from '../../components';




export const ToolWithholdingForm = () => {
    // const [formData, setFormData] = useState({
    //     productCost: '',
    //     importCost: '',
    //     nationalWithholding: 16,
    //     billInv: '',
    //     percentageProductSale: 10,
    //     additionalCotsNote: '',
    //     additionalCots: '',
    // });

    const [formData, setFormData] = useState(
        {
            productCost: {
                'type': 'amount',
                'value': ''
            },
            importCost: {
                'type': 'amount',
                'value': ''
            },
            nationalWithholding: {
                'type': 'porcent',
                'value': 16
            },
            billInv: {
                'type': 'amount',
                'value': ''
            },
            percentageProductSale: {
                'type': 'porcent',
                'value': 10
            },
            additionalCotsNote: {
                'type': 'text',
                'value': ''
            },
            additionalCots: {
                'type': 'amount',
                'value': ''
            },
        }
        // {
        //     productCost: {
        //         'type': 'amount',
        //         'value': '10000'
        //     },
        //     importCost: {
        //         'type': 'amount',
        //         'value': '80'
        //     },
        //     nationalWithholding: {
        //         'type': 'porcent',
        //         'value': 16
        //     },
        //     billInv: {
        //         'type': 'amount',
        //         'value': 0
        //     },
        //     percentageProductSale: {
        //         'type': 'porcent',
        //         'value': 40
        //     },
        //     additionalCotsNote: {
        //         'type': 'text',
        //         'value': 'HolisChao'
        //     },
        //     additionalCots: {
        //         'type': 'amount',
        //         'value': ''
        //     },
        // }
    );

    const [dataCaclProfit, setDataCaclProfit] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);


    const {
        productCost,
        importCost,
        nationalWithholding,
        billInv,
        percentageProductSale,
        additionalCotsNote,
        additionalCots,
    } = formData;

    const navigate = useNavigate();

    const percentagesProductSale = [10, 20, 40];


    const handleOnChange = (event) => {
        event.preventDefault();
        const { target } = event;
        const { name, value } = target;
        
        setFormData({ ...formData, [name] : {...formData[name], ['value'] : value} });
    };
    
    const closeModal = (value) => {
        setModalOpen(value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // dataCleaning
        
        const CaclProfit = calcProfit(formData);
        setDataCaclProfit(CaclProfit);
        setModalOpen(true);
        // navigate('/tools/withholding-calculator/ToolWithholdingCalcResume');
    }


    return (
        <>
            <form className="bg-slate-200 h-screen px-6 py-10">
                <div className="mb-4">
                    <label
                        htmlFor="product_cost"
                        className="block text-sm text-dark/85 pb-1"
                    >
                        Costo del producto
                    </label>

                    <input
                        type="number"
                        id="product_cost"
                        name='productCost'
                        value={productCost.value}
                        onChange={handleOnChange}
                        placeholder="0"
                        className="w-full px-2 py-2 mr-2 text-lg font-sans 
                                        border border-solid border-dark/50 rounded
                                        focus:outline-none focus:border-2 focus:border-dark/50"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="import_cost"
                        className="block text-sm text-dark/85 pb-1"
                    >
                        Costo importación
                    </label>
                    <div className='flex gap-2'>
                        <input
                            type="number"
                            id="import_cost"
                            name='importCost'
                            value={importCost.value}
                            onChange={handleOnChange}
                            placeholder="0"
                            className="w-full px-2 py-2 text-lg font-sans 
                                    border border-solid border-dark/50 rounded
                                    focus:outline-none focus:border-2 focus:border-dark/50"
                        />

                        {/* <Toggle initialState='amount' /> */}
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="national_withholding"
                        className="block text-sm text-dark/85 pb-1"
                    >
                        Retención nacional (%)
                    </label>

                    <input
                        type="number"
                        id="national_withholding"
                        name='nationalWithholding'
                        value={nationalWithholding.value}
                        onChange={handleOnChange}
                        placeholder="0"
                        className="w-full px-2 py-2 text-lg font-sans 
                                    border border-solid border-dark/50 rounded
                                    focus:outline-none focus:border-2 focus:border-dark/50"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="bill_inv"
                        className="block text-sm text-dark/85 pb-1"
                    >
                        Monto factura inv
                    </label>
                    <div className='flex gap-2'>
                        <input
                            type="number"
                            id="bill_inv"
                            name='billInv'
                            value={billInv.value}
                            onChange={handleOnChange}
                            placeholder="0"
                            className="w-full px-2 py-2 text-lg font-sans 
                                    border border-solid border-dark/50 rounded
                                    focus:outline-none focus:border-2 focus:border-dark/50"
                        />

                        {/* <Toggle disabled initialState='porcent' /> */}
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-sm text-dark/85 pb-2"
                    >
                        Venta del producto (%)
                    </label>

                    <div className="flex justify-between">
                        <button
                            name='percentageProductSale'
                            value={percentagesProductSale[0]}
                            onClick={handleOnChange}
                            className={`w-12 h-12  border border-solid border-dark rounded 
                                        ${percentagesProductSale[0] == percentageProductSale.value ? 'bg-dark text-white shadow-md shadow-dark drop-shadow-md' : 'bg-white'}`}
                        >
                            {percentagesProductSale[0]}
                        </button>

                        <button
                            name='percentageProductSale'
                            value={percentagesProductSale[1]}
                            onClick={handleOnChange}
                            className={`w-12 h-12  border border-solid border-dark rounded 
                                        ${percentagesProductSale[1] == percentageProductSale.value ? 'bg-dark text-white shadow-md shadow-dark drop-shadow-md' : 'bg-white'}`}
                        >
                            {percentagesProductSale[1]}
                        </button>

                        <button
                            name='percentageProductSale'
                            value={percentagesProductSale[2]}
                            onClick={handleOnChange}
                            className={`w-12 h-12  border border-solid border-dark rounded 
                                        ${percentagesProductSale[2] == percentageProductSale.value ? 'bg-dark text-white shadow-md shadow-dark drop-shadow-md' : 'bg-white'}`}
                        >
                            {percentagesProductSale[2]}
                        </button>

                        <button
                            className="w-20 h-12 bg-white/20 border border-solid border-dark rounded"
                            disabled
                        >
                            <span className="text-sm">Custom</span>
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="additional_cost-note"
                        className="block text-sm text-dark/85 pb-1"
                    >
                        Gastos adicionales
                    </label>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            id="additional_cost-note"
                            name='additionalCotsNote'
                            value={additionalCotsNote.value}
                            onChange={handleOnChange}
                            placeholder="Nota"
                            className="w-full px-2 py-2 text-sm font-sans
                                        focus:outline-none focus:border-2 focus:border-dark/50"
                        />

                        <input
                            type="number"
                            name='additionalCots'
                            value={additionalCots.value}
                            onChange={handleOnChange}
                            placeholder="0"
                            className="w-full px-2 py-2 text-lg font-sans 
                                        border border-solid border-dark/50 rounded
                                        focus:outline-none focus:border-2 focus:border-dark/50"
                        />
                    </div>
                </div>

                <button
                    className="w-full py-2 mt-10 text-lg text-white bg-primary rounded 
                    border-2 border-solid border-primary font-semibold hover:text-dark hover:bg-white 
                    shadow-md shadow-slate-400"
                    onClick={handleSubmit}
                >
                    Calcular
                </button>
            </form>

            {/* // * Modal Calculator Profit */}
            {/* // ! Buscar moverlo al principal y el Form que sea independiente */ }
            {modalOpen && (
                <ModalMain fnModal={closeModal}>                    
                    <CalcResume data={dataCaclProfit} fnModal={closeModal}/>
                </ModalMain>
            )}
        </>
    )
}
