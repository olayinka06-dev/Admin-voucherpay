import { BsArrowLeft } from "react-icons/bs";
import { RxBox } from "react-icons/rx";
import PayoutTable from "./PayoutTable";

export default function PayoutHome() {
    return (
        <div className="container">
            <div className="container bg-[#fff] rounded-[10px] py-[50px] px-[30px]">
                <p className="text-[20px] pb-[10px] font-[600]">My Payout</p>
                <div className="container flex">
                    <div className="container items-center justify-center align-middle">
                        <p className="text-sm text-[rgba(0,0,0,0.5)]">Total balance</p>
                        <p className="text-[30px] py-[10px] font-[600]">N5,400,00</p>
                    </div>
                    <div className="container items-center justify-center align-middle">
                        <p className="text-sm text-[rgba(0,0,0,0.5)]">Pending Payout</p>
                        <p className="text-[30px] py-[10px] font-[600]">N1,980,00</p>
                    </div>
                    <div className="container items-center justify-center align-middle">
                        <p className="text-sm text-[rgba(0,0,0,0.5)]">Total Payout</p>
                        <p className="text-[30px] py-[10px] font-[600]">N80,090,00</p>
                    </div>

                </div>
            </div>
            <div className="container mt-[40px] w-full rounded-[10px] h-[60vh] bg-[#fff]">
                <PayoutTable />
            </div>
        </div>
    )
}