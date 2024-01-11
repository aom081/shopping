import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import Swal from 'sweetalert2';
import { QRCode } from 'qrcode';
import generatePayload from 'promptpay-qr';

const Bill = ({product}) => {
    const mobileNumber = "000-000-0000"
    const IdCardNumber = "0-0000-0000-00-0"
    const[svg, setSvg] = useState("");

    const carts = useSelector((state) => state.cart);
    const Subtotal =carts.reduce(
        (total, product) => total + product.quantity * product.price, 0
    );

    const totalBilling = (Subtotal) => {
        if (Subtotal > 0) return Subtotal + 35
    };

    useEffect(() => {
        const total = totalBilling(Subtotal);
        generateQR(total);
    },[Subtotal]);

    const generateQR = (amount) => {
        const payload = generatePayload(mobileNumber, { amount }) //First parameter : mobileNumber || IDCardNumber

        // Convert to SVG QR Code
const options = { type: 'svg', color: { dark: '#000', light: '#fff' } }
QRcode.toString(payload, options, async (err, svg) => {
    if (err) return console.log(err);
    await setSvg(svg);
})
    }
    
    const handleCheckOut = () => {
        Swal.fire({
            title: "<strong>PromPay Payment</strong>",
            icon: "warning",
            html: `
              <img src="data: image/svg+xml;utf8${encodeURIComponent(svg)}"/>
              Please use any Bank application scan this QRcode to pay with PromptPay.
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
          });
    }
    return (
        <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700"> {Subtotal} ฿ </p>
                <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700"> {Subtotal > 0 ? "35 ฿" : "0 ฿"} </p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-bold">
                    <p className="text-lg font-bold"> Total </p>
                    <div>
                        <p className="mb-1 text-lg font-bold"> {totalBilling} </p>
                        <p className="text-sm text-gary-700"> including VAT</p>
                    </div>
                </div>
                <button className="mt-6 w-full rounded-md bg-blue-500 py-1 5 font-blue-50 hover:bg-blue-600"
                onClick={handleCheckOut}>
                    Check out
                </button>
            </div>
        </div>
    )
}

export default Bill