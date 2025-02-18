import '../../assets/scss/index.scss';

const Cart = () => {
  return (
    <>
      <div className="cityHeader w-full">
        <div className="container mx-auto px-4 py-10">
          <nav className="flex mb-10" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <span className="inline-flex items-center text-sm font-medium text-gray-700">
                  付款
                </span>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-400 md:ms-2 dark:text-gray-400">
                    填寫資料
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="w-full mb-10">
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
              <li className="flex md:w-full items-center text-teal-600 dark:text-teal-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 w-36">
                  <svg
                    className="w-4 mr-2 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  選擇方案
                </span>
              </li>
              <li className="flex md:w-full items-center text-teal-600 dark:text-teal-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500 w-36">
                  <svg
                    className="w-4 mr-2 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  填寫資料
                </span>
              </li>
              <li className="flex items-center w-48">
                <span className="w-4 mr-2 me-2">3</span>
                完成付款
              </li>
            </ol>
          </div>

          <section className="mb-10">
            <div className="flex justify-start items-start gap-5">
              <div className="w-2/3">
                <div className="p-4 mb-4 bg-white shadow-md rounded-lg p-4 border border-gray-200 ">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    預定資料
                  </h2>

                  <div className="mx-auto">
                    <div className="flex items-center p-4 bg-white shadow-md rounded-lg border border-gray-200">
                      <img
                        src="https://image.kkday.com/v2/image/get/h_600%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/product_264493/20241213105222_JeJDz/jpg"
                        alt="Art Aquarium"
                        className="w-20 h-20 rounded-lg object-cover"
                      />

                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Art Aquarium(金魚藝術展) in Taipei
                        </h3>
                        <p className="text-gray-600 text-sm">
                          一般票（彈性日期使用）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 mb-4 bg-white shadow-md rounded-lg p-4 border border-gray-200 ">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    訂購人資料
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        名字 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Bean"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        姓氏 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="Huang"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      國家/地區 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option>台灣</option>
                      <option>中國</option>
                      <option>美國</option>
                      <option>日本</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="col-span-1 flex flex-col justify-end">
                      <label
                        htmlFor="phone-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        聯絡電話 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="phone-code"
                        className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option>+886</option>
                        <option>+86</option>
                        <option>+81</option>
                      </select>
                    </div>

                    <div className="col-span-2 flex items-end">
                      <label htmlFor="phone-number" className="sr-only">
                        電話號碼
                      </label>
                      <input
                        type="text"
                        id="phone-number"
                        className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="請輸入聯絡電話"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      電子郵件信箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="jump09205@gmail.com"
                    />
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      id="sync-member"
                      type="checkbox"
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                    <label
                      htmlFor="sync-member"
                      className="ml-2 text-sm text-gray-700"
                    >
                      同時更新會員資料
                    </label>
                  </div>
                </div>

                <div className="p-4 mb-4 bg-white shadow-md rounded-lg p-4 border border-gray-200 ">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    旅客代表人
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="col-span-1 flex flex-col justify-end">
                      <label
                        htmlFor="phone-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        請選擇旅客代表人 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="representative"
                        className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="" disabled selected>
                          請選擇旅客代表人
                        </option>
                        <option>同訂購人資料</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        英文名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="例：Bean"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        請參考護照英文姓名
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        英文姓 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="例：Huang"
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        請參考護照英文姓名
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mb-4 bg-white shadow-md rounded-lg p-4 border border-gray-200 ">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    付款
                  </h2>
                  <form
                    action="#"
                    className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="full_name"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Full name (as displayed on card)*
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="Bean Huang"
                          required
                        />
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <label
                          htmlFor="card-number-input"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          信用卡號碼*
                        </label>
                        <input
                          type="text"
                          id="card-number-input"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="card-expiration-input"
                          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        >
                          有效期限(月/年)*
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                            <svg
                              className="h-4 w-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            // eslint-disable-next-line react/no-unknown-property
                            datepickerFormat="mm/yy"
                            id="card-expiration-input"
                            type="text"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="12/23"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="cvv-input"
                          className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          背面末3碼*
                          <button
                            data-tooltip-target="cvv-desc"
                            data-tooltip-trigger="hover"
                            className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                          >
                            <svg
                              className="h-4 w-4"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <div
                            id="cvv-desc"
                            role="tooltip"
                            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                          >
                            The last 3 digits on back of card
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </div>
                        </label>
                        <input
                          type="number"
                          id="cvv-input"
                          aria-describedby="helper-text-explanation"
                          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                          placeholder="•••"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="p-4 mb-4 bg-white shadow-md rounded-lg border border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    電子發票、收據
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div className="col-span-1 flex flex-col justify-end">
                      <label
                        htmlFor="invoice-option"
                        className="block text-sm font-medium text-gray-700"
                      >
                        旅行業代收轉付電子收據{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="invoice-option"
                        className="mt-1 block w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="email">寄至訂購人E-mail</option>
                        <option value="tax">開立統編 / 抬頭</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        電子郵件信箱 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="jump09205@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 openReceipt hidden">
                    <div>
                      <label
                        htmlFor="taxNo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        統一編號 <span className="text-red-500">*</span>
                      </label>
                      <input
                        placeholder="請輸入統一編號"
                        autoComplete="on"
                        type="number"
                        id="taxNo"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        抬頭 (買受人) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        placeholder="請輸入公司名稱（抬頭）"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/3 bg-white shadow-md rounded-lg p-4 border border-gray-200 sticky top-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Art Aquarium(金魚藝術展) in Taipei
                </h2>
                <p className="mb-4 text-gray-500 text-sm border-b border-gray-200 pb-4">
                  一般票（彈性日期使用）
                </p>

                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-500 text-sm">日期</span>
                  <span className="text-gray-900 text-sm">兌換期內皆適用</span>
                </div>

                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-500 text-sm">數量</span>
                  <span className="text-gray-900 text-sm">每人 x 1</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-gray-200 pb-4">
                  <span className="text-gray-500 text-sm">
                    訂單總金額 (1件商品)
                  </span>
                  <span className="text-gray-900 text-lg font-medium">
                    $600
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 text-center font-medium"
                >
                  確認付款
                </button>

                <div className="flex justify-center items-center mt-4">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8 4a1 1 0 110-2 1 1 0 010 2zm1-9h-2v5h2V5z"></path>
                  </svg>
                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    取消政策
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart;
