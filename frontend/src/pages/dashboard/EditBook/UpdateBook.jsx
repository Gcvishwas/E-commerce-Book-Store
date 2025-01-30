import React, { useEffect } from 'react';
import InputField from '../addBook/InputField';
import SelectField from '../addBook/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchBooksIdQuery, useUpdateBookMutation } from '../../../redux/features/books/booksapi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const { id } = useParams();
    const { data: bookData, isLoading, isError, refetch } = useFetchBooksIdQuery(id);
    const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (bookData) {
            setValue('title', bookData.title);
            setValue('description', bookData.description);
            setValue('category', bookData.category);
            setValue('trending', bookData.trending);
            setValue('oldPrice', bookData.oldPrice);
            setValue('newPrice', bookData.newPrice);
            setValue('coverImage', bookData.coverImage);
        }
    }, [bookData, setValue]);

    const onSubmit = async (data) => {
        const updateBookData = {
            ...data,
            oldPrice: Number(data.oldPrice),
            newPrice: Number(data.newPrice),
        };

        try {
            await updateBook({ id, ...updateBookData }).unwrap();
            Swal.fire({
                title: 'Book Updated',
                text: 'Your book was updated successfully!',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Okay',
            });
            refetch(); // Refresh book data after update
        } catch (error) {
            console.error('Failed to update book:', error);
            Swal.fire({
                title: 'Update Failed',
                text: 'There was an error updating the book. Please try again.',
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Retry',
            });
        }
    };

    if (isLoading || isUpdating) return <Loading />;
    if (isError) return <div>Error fetching book data</div>;

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Title"
                    name="title"
                    placeholder="Enter book title"
                    register={register}
                />
                <InputField
                    label="Description"
                    name="description"
                    placeholder="Enter book description"
                    type="textarea"
                    register={register}
                />
                <SelectField
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'business', label: 'Business' },
                        { value: 'technology', label: 'Technology' },
                        { value: 'fiction', label: 'Fiction' },
                        { value: 'horror', label: 'Horror' },
                        { value: 'adventure', label: 'Adventure' },
                    ]}
                    register={register}
                />
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            {...register('trending')}
                            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                    </label>
                </div>
                <InputField
                    label="Old Price"
                    name="oldPrice"
                    type="number"
                    placeholder="Old Price"
                    register={register}
                />
                <InputField
                    label="New Price"
                    name="newPrice"
                    type="number"
                    placeholder="New Price"
                    register={register}
                />
                <InputField
                    label="Cover Image URL"
                    name="coverImage"
                    type="text"
                    placeholder="Cover Image URL"
                    register={register}
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition"
                >
                    {isUpdating ? 'Updating...' : 'Update Book'}
                </button>
            </form>
        </div>
    );
};

export default UpdateBook;
