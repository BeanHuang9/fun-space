import { useState } from "react";

const ImageBox = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://image.kkday.com/v2/image/get/h_600%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_264493/20241213105222_JeJDz/jpg",
    "https://image.kkday.com/v2/image/get/h_300%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_264493/20241216114506_ARrir/jpg",
    "https://image.kkday.com/v2/image/get/h_300%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_264493/20241216114507_HccBN/jpg",
  ];

  return (
    <>
      <div className="relative grid grid-cols-5 grid-rows-2 h-96 gap-2">
        <div className="col-span-3 row-span-2">
          <img
            src={images[0]}
            alt="台北金魚藝術展"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={images[1]}
            alt="台北金魚藝術展"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(images[1])}
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={images[2]}
            alt="台北金魚藝術展"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(images[2])}
          />
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={selectedImage}
              alt="大圖"
              className="w-full h-auto rounded-lg"
            />

            <button
              className="absolute top-4 right-4 text-white px-3 py-2 rounded-full text-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageBox;
