import { deletePaymentProof, getSinglePaymentProofDetail, updatePaymentProof } from "@/store/slices/superAdminSlice";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentProofs = () => {
  const { paymentProofs, singlePaymentProof } = useSelector(
    (state) => state.superAdmin
  );
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  const handlePaymentProofDelete = (id) => {
    dispatch(deletePaymentProof(id));
  };

  const handleFetchPaymentDetail = (id) => {
    dispatch(getSinglePaymentProofDetail(id));
    loading(false);

  };
const { loading } = useSelector((state) => state.superAdmin);

useEffect(() => {
  if (
    !loading && // ✅ only when done loading
    singlePaymentProof &&
    Object.keys(singlePaymentProof).length > 0
  ) {
    setOpenDrawer(true);
  }
}, [singlePaymentProof]);



  return (
    <>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-whilte mt-5">
        <thead className="bg-gray-800  text-white">
          <tr>
            <th className="w-1/3 py-1">User ID</th>
            <th className="w-1/3 py-1">Status</th>
            <th className="w-1/3 py-1">Actions</th>
          </tr>

        </thead>
        <tbody className="text-gray-700">
          {
            paymentProofs.length> 0 ? (
              paymentProofs.map((element, index)=>{
                return (<tr key = {index}>
                  <td className="py-2 px-4 text-cnter">{element.userId}</td>
                  <td className="py-2 px-4 text-cnter">{element.status}</td>
                  <td className = "flex items-center py-4 justify-center gap-3">
                    <button className = "bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition-all duration-300"
                    onClick={()=>handleFetchPaymentDetail(element._id)}>Update</button>
                    <button className = "bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition-all duration-300"
                    onClick={()=>handlePaymentProofDelete(element._id)}>Delete</button>

                  </td>

                </tr>)
              })
            ) : (
              <tr>
                <td colSpan={3} className="text-center text-xl text-sky-600 py-3">
                  No Payment Proofs are found
                </td>
              </tr>
            )
          }

        </tbody>

      </table>
      
    </div>
    <Drawer setOpenDrawer={setOpenDrawer} openDrawer={openDrawer}/>
    </>
  );
};

export default PaymentProofs;

export const Drawer = ({ setOpenDrawer, openDrawer }) => {
  const {singlePaymentProof, loading} = useSelector(state => state.superAdmin)
  const [amount, setAmount] = useState(singlePaymentProof.amount || "");
  const [status, setStatus] = useState(singlePaymentProof.status || "");

  console.log(singlePaymentProof.amount)
  console.log(singlePaymentProof.userId)

  const dispatch = useDispatch();
  const handlePaymentProofUpdate = ()=>{
    dispatch(updatePaymentProof(singlePaymentProof._id, status, amount));
  };



  return(
  <>
    <section
          className={`fixed ${
            openDrawer && singlePaymentProof.userId ? "bottom-0" : "-bottom-full"
          }  left-0 w-full transition-all duration-300 h-full bg-[#00000087] flex items-end`}
        >
          <div className="bg-white h-fit transition-all duration-300 w-full">
            <div className="w-full px-5 py-8 sm:max-w-[640px] sm:m-auto">
              <h3 className="text-[#D6482B]  text-3xl font-semibold text-center mb-1">
                Update Pyament Proof
              </h3>
              <p className="text-stone-600">
                You can update payment status and amount.
              </p>
              <form className="flex flex-col gap-5 my-5">
                <div className="flex flex-col gap-3">
                  <label className="text-[16px] text-stone-600">
                    User Id
                  </label>
                  <input type = "text" value={singlePaymentProof.userId || ""} disabled onChange={(e)=> e.target.value} className = "text-xl px-1 py -2 bg-transparent border-[1px] border-stone-600 round-md "/>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[16px] text-stone-600 focus: outline-none">
                   Amount
                  </label>
                  <input type = "number" value={amount} disabled onChange={(e)=> setAmount(e.target.value)} className = "text-xl px-1 py -2 bg-transparent border-[1px] border-stone-600 round-md focus: outline-none "/>
                  
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[16px] text-stone-600 focus: outline-none">
                   Status
                  </label>
                  <select value={status} onChange = {(e)=> setStatus(e.target.value)} className="text-xl px-1 py -2 bg-transparent border-[1px] border-stone-600 round-md focus: outline-none">
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Settled">Settled</option>
                  </select>
                </div>
                <div>
                   <label className="text-[16px] text-stone-600 focus: outline-none">
                    Comment
                    </label>
                    <textarea  rows={5} value = {singlePaymentProof.comment ||""} onChange={(e)=>e.target.value} disabled className="text-xl px-1 py -2 bg-transparent border-[1px] border-stone-600 round-md focus: outline-none"/>
                </div>
                <div>
                  <Link to={singlePaymentProof.proof?.url || "" }className="bg-[#D6482B] flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300 hover:bg-[#b8381e]">
                  Payment Proof (SS)
                      </Link>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-blue-500 flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300 hover:bg-blue-700"
                    onClick={handlePaymentProofUpdate}
                  >
                    {loading ? "Updating Payment" : "Update payment Proof"} 
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-yellow-500 flex justify-center w-full py-2 rounded-md text-white font-semibold text-xl transition-all duration-300 hover:bg-yellow-700"
                    onClick={() => setOpenDrawer(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  </>
  );
};
