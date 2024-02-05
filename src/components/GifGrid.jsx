import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category); // Invoca el hook con 'category'

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Loading...</h2>)}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}