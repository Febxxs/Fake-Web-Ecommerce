/* eslint-disable react/prop-types */
import { Button, Divider, Image } from "@nextui-org/react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { PiChatsDuotone } from "react-icons/pi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { useState } from "react";

const Purchase = ({ product }) => {
  const [whist, setWhist] = useState(false);

  return (
    <div className="border rounded-xl border-slate-900 p-4">
      <h2 className="font-bold text-xl">Atur Pembelian</h2>
      <div className="relative overflow-hidden mt-2">
        <Image src={product?.image} height={80} />
        <small>Category : {product?.category}</small>
      </div>
      <Divider className="my-4" />
      {/* count */}
      <div>
        <div className="border rounded-lg flex items-center gap-3 py-1 px-2 border-slate-400 w-28 justify-between mt-4">
          <button>
            <FaMinus className="active:scale-80" />
          </button>
          <p className="border-x border-slate-400 px-4">1</p>
          <button>
            <FaPlus className="active:scale-80" />
          </button>
        </div>
        <small className="text-slate-500">Atur jumlah pesanan</small>
      </div>
      {/* button but */}
      <div className="mt-12">
        <p className="flex justify-between items-center">
          <span>Total :</span>
          <span className="font-bold">{product?.price}</span>
        </p>
        <div className="flex flex-col justify-center items-center gap-2 mt-2">
          <Button variant="bordered" color="primary" className="w-full">
            <FaPlus /> keranjang
          </Button>
          <Button color="primary" className="w-full">
            Beli
          </Button>
        </div>
      </div>
      {/* fitur */}
      <div className="flex justify-between px-2 mt-2">
        <div className="flex items-center gap-1">
          <PiChatsDuotone size={20} className="cursor-pointer" />
          <p>Chat</p>
        </div>
        <div className="flex items-center gap-1">
          {!whist ? (
            <MdFavoriteBorder
              size={20}
              className="cursor-pointer"
              onClick={() => setWhist(true)}
            />
          ) : (
            <MdFavorite
              size={20}
              color="red"
              className="cursor-pointer"
              onClick={() => setWhist(false)}
            />
          )}
          <p>Whistlist</p>
        </div>
        <div className="flex items-center gap-1">
          <IoShareSocialSharp size={20} className="cursor-pointer" />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
