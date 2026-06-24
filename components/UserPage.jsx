"use state"

export default function UserPage(){
    return(
        <div className="flex items-center justify-center">
            <div className="flex items-center justify-center text-black">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign Up</h2>
            </div>
            <div>
                <form method="POST" className="space-y-5">Username:</form>
                <div>
                    <label htmlFor=""></label>
                </div>
            </div>
        </div>
    )
}