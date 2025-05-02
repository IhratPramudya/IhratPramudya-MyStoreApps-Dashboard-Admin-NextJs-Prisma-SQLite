
const PurchasedProductsModal = ({setIsOpen}) => {
    const closeModal = () => setIsOpen(false)

    return (
        <>
                  <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center ">
                        <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}/>
                        <div className="relative p-4 w-full max-w-xl h-full md:h-auto bg-white rounded-lg shadow-lg min-h-[200px]">
                            <div className="relative text-center p-5">
                                <button type="button"  className="close-icon-button" onClick={closeModal}>
                                    <CloseIcon />
                                </button>
                                <h1>Purchased Products Modal</h1>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default PurchasedProductsModal;
