import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const { email, family_name, given_name, id, picture } = user || {}
    console.log(user);
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl">Welcome to your profile</h2>
            <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img
                    alt=""
                    src={picture}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">Name</dt>
                            <dd className="text-2xl font-bold">{given_name}  {family_name}</dd>
                        </div>
                    </dl>
                    <div className="mt-2 flex flex-col">
                        <div>
                            <div className="mt-1.5">
                                <p className="text-gray-500">Email</p>
                                <p className="font-medium">{email}</p>
                            </div>
                        </div>
                        <div >
                            <div className="mt-1.5 ">
                                <p className="text-gray-500">ID</p>
                                <p className="font-medium">{id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProfilePage; ProfilePage