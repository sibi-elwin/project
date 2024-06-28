export function Transfer(){
return  <div className="flex items-center justify-center min-h-screen bg-green-50">
<div className="bg-white p-6 rounded-lg shadow-lg">
  <div className="flex items-center">
    <div className="bg-green-500 text-white p-2 rounded-full">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2l4 -4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div className="ml-4">
      <h2 className="text-lg font-semibold text-green-700">Transaction Successful!</h2>
      <p className="mt-1 text-gray-600">Your transaction has been completed successfully.</p>
    </div>
  </div>
</div>
</div>


}
    