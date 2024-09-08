/* eslint-disable react/prop-types */
import { Card, CardBody, Image } from "@nextui-org/react";
import image from "../assets/auth.png";
import { Link } from "react-router-dom";

const FormAuth = ({ isRegister, children }) => {
  return (
    <div className="p-8 m-auto min-h-screen w-screen">
      <h2 className="text-3xl font-extrabold text-primary text-center">
        Febxs Store
      </h2>
      <Card className=" flex-row h-[85vh] items-center justify-evenly shadow-none">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={1024}
          />
        </CardBody>
        <CardBody>
          <div className="w-96 m-auto shadow-md p-8 border rounded-md">
            <div className="mb-4">
              <h1 className="font-extrabold text-2xl text-center">
                Daftar Sekarang
              </h1>
              {isRegister === true ? (
                <p className="text-sm text-center">
                  Sudah punya akun?{" "}
                  <Link to="/login" className="text-primary">
                    Masuk
                  </Link>
                </p>
              ) : (
                <p className="text-sm text-center">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-primary">
                    Register
                  </Link>
                </p>
              )}
            </div>
            <main>{children}</main>

            <div className=" text-center mt-4">
              <small className="text-sm">
                Dengan mendaftar,
                <span className="text-primary">
                  saya menyetujui Syarat & Ketentuan
                </span>{" "}
                serta
                <span className="text-primary">
                  Kebijakan Privasi Tokopedia
                </span>
              </small>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FormAuth;
