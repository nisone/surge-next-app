
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="flex justify-center items-center" >
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 align-middle" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
  }