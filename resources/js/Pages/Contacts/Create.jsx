import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ auth }) => {
    const initialValues = {
        name: "",
        phone: "",
        avatar: null,
        visibility: "",
    };

    const { data, errors, setData, post } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route("contacts.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Crear Contactos
                    </h2>
                    <Link href={route("contacts.index")}>Contactos</Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit} className="space-y-3">
                                <div>
                                    <InputLabel htmlFor="name" value="Nombre" />

                                    <TextInput
                                        id="name"
                                        placeholder="Tu nombre"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="phone"
                                        value="Telefono"
                                    />

                                    <TextInput
                                        id="phone"
                                        placeholder="+5545678900"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.phone}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="avatar"
                                        value="Avatar"
                                    />

                                    <TextInput
                                        id="avatar"
                                        type="file"
                                        name="avatar"
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("avatar", e.target.files[0])
                                        }
                                    />

                                    <InputError
                                        message={errors.avatar}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="visibility"
                                        value="Visibilidad"
                                    />

                                    <select
                                        name="visibility"
                                        id="visibility"
                                        className={
                                            "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                                        }
                                        onChange={(e) =>
                                            setData(
                                                "visibility",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="public">Publico</option>
                                        <option value="private">Private</option>
                                    </select>

                                    <InputError
                                        message={errors.visibility}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <PrimaryButton>
                                        Crear contacto
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
