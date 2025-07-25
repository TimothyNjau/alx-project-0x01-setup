import { UserProps } from "@/interfaces";
import Image from "next/image";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <>
      <div className="flex flex-col w-3/4 border-r-2 border-2 justify-evenly sm:w-auto">
        <div className="flex flex-row justify-between mx-6  my-2">
          <Image src="" alt={`Image of ${username}`} width={200} height={200} />
          <div className="flex flex-col gap-2">
            <h3 className="px-auto py-2">UserID: {id}</h3>
            <h3 className="px-auto py-2">Name: {name}</h3>
            <h3 className="px-auto py-2 font-semibold text-xl">
              Username: {username}
            </h3>
          </div>
        </div>
        <div className="mx-6 ">
          <h2 className="text-center align-center text-xl">
            Contact Information
          </h2>
          <div>
            <h3>{phone}</h3>
            <h3>{email}</h3>
            <h3>{website}</h3>
          </div>
        </div>
        <div className="mx-6 addressInfo">
          <h2 className="text-center items-center text-xl">
            {" "}
            Address Information
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <h3 className="font-light text-center items-center">
              {" "}
              Street: <span className="font-semibold">{address.street}</span>
            </h3>
            <h3 className="font-light text-center">
              Suite: 
              <span className="font-semibold text-center">{address.suite}</span>
            </h3>
            <h3 className="font-light text-center">
              City:
              <span className="font-semibold">{address.city}</span>
            </h3>
            <h3 className="font-light text-center">
              {" "}
              Zip:
              <span className="font-semibold">{address.zipcode}</span>
            </h3>
          </div>
        </div>
        <div className="mx-6 ">
            <h2 className="mx-auto items-center text-center text-xl">Company Information</h2>
            <div>
                <h3 className="font-medium">{company.name}</h3>
                <h3 className="font-normal">{company.bs}</h3>
                <h3 className="font-light">{`${company.catchPhrase}`}</h3>
            </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
