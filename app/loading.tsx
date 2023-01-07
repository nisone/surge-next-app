
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
        <div className="flex justify-center items-center h-full ">
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
        </>
    );
  }