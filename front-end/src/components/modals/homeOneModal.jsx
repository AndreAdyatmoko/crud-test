import ButtonPrimary from "../buttons/button";

const Modal = ({closeModal}) => {

  return (
    <>
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 mx-auto my-0 bg-secondary opacity-85 trapa rounded-lg shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" text-center">
              <h3 className="mb-2 font-freeman sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                Kode Akses
              </h3>

              <div>
                <div>
                  <input
                    className="rounded w-full p-2 text-black mb-4 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <ButtonPrimary text="Login" onClick={closeModal} />
                <ButtonPrimary text="Cancel" onClick={closeModal} />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Modal;
