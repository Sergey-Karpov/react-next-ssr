import { ReactElement } from "react";
import { Photos, IPhoto } from "../../models";
import Image from "next/image";
import Api from "../../api/api";
import "./index.css";

type Props = {
  albumId: number;
};

const getData = async (albumId: number): Promise<Photos> => {
  const data = await Api.getPhotos(albumId);
  return data;
};

const Album = async ({ albumId }: Props): Promise<ReactElement> => {
  const data = await getData(albumId);

  return (
    <div className="album-container">
      {data.map((photo: IPhoto) => (
        <div key={photo.id} className="photo-container">
          <Image
            src={photo.url}
            className="photo-img"
            alt={photo.title}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Album;
