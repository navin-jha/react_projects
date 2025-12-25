import axios from 'axios'
import { useEffect, useState } from 'react'


function Home() {
    const [user, setUser] = useState([]);
    const [newUser, setnewUser] = useState({
        ID: "",
        Name: "",
        Password: "",
        Email: ""
    })
    const [editUser, seteditUser] = useState(null)

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        const display = await axios.get("/api/allUser");
        setUser(display.data);
    };
    const Delete = async (id) => {
        try {
            await axios.delete(`/api/delete/${id}`);
            setUser(prev => prev.filter(u => u.id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target
        setnewUser(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const addUser = async () => {
        await axios.post("/api/insert", {
            id: Number(newUser.ID),
            name: newUser.Name,
            password: newUser.Password,
            email: newUser.Email
        })
        setnewUser({ ID: "", Name: "", Password: "", Email: "" })
        getAllUser()
    }
    const startEdit = (value) => {
        seteditUser(value);
        setnewUser({
            ID: value.id,
            Name: value.name,
            Password: value.password,
            Email: value.email
        });
    };
    const update = async () => {
        await axios.put(`/api/update/${editUser.id}`, {
            name: newUser.Name,
            password: newUser.Password,
            email: newUser.Email
        });
        setnewUser({ ID: "", Name: "", Password: "", Email: "" });
        seteditUser(null);
        getAllUser();
    };
    return (
        <>
            <h3 className='bg-slate-50 text-black w-40 shadow-lg text-center  rounded '>Number of users: {user.length}</h3>
            <div className='bg-slate-50 text-black w-40 text-center shadow-md  rounded'>
                {editUser ? "Edit User_" : "Add User_ "}
            </div>
            <div className=' border-gray-600 plex items-center w-full'>
                <input
                    type="text"
                    name='Name'
                    placeholder='Enter the name:'
                    value={newUser.Name}
                    onChange={handleChange}
                    className='border-none text-black bg-transparent outline-none bg-slate-400 shadow-md p-2 m-2 rounded' />
                <input type="password"
                    name='Password'
                    placeholder='Enter the Password:'
                    value={newUser.Password}
                    onChange={handleChange}
                    className='border-none text-black bg-transparent outline-none bg-slate-400 shadow-md p-2 m-2 rounded' />
                <input type="text"
                    name='Email'
                    placeholder='Enter the Email:'
                    value={newUser.Email}
                    onChange={handleChange}
                    className='border-none text-black bg-transparent outline-none bg-slate-400 shadow-md p-2 m-2 rounded' />
                {editUser ? (
                    <>
                        <button
                            onClick={update}
                            className='bg-slate-400 rounded text-black  ml-5 p-2 hover:bg-slate-300'
                        >Edit</button>
                        <button
                            onClick={() => {
                                seteditUser(null);
                                setnewUser({ ID: "", Name: "", Password: "", Email: "" });
                            }}
                            className='bg-slate-400 rounded text-black  ml-5 p-2 hover:bg-slate-300'
                        >Cancel</button>
                    </>
                ) : (
                    <button
                        onClick={addUser}
                        className='bg-slate-400 rounded text-black  ml-5 p-2 hover:bg-slate-300'
                    >Add</button>
                )}


            </div>
            <table className='w-full border-gray-300 '>
                <thead className=''>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className='border-collapse text-center '>
                    {user.map((value) => (
                        <tr key={value.id}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.password}</td>
                            <td>{value.email}</td>
                            <td><button onClick={() => Delete(value.id)} className='bg-slate-400 rounded
                             text-black p-2 hover:bg-slate-300'>Delete</button>
                            </td>
                            <td><button onClick={() => startEdit(value)} className='bg-slate-400  rounded
                             text-black p-2 hover:bg-slate-300'>Edit</button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table >

        </>
    )
}

export default Home;

