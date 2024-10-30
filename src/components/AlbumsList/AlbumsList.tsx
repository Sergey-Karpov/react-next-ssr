import { Flex } from "antd";
import { ReactElement } from "react";
import Api from "../../api/api";
import { Albums, IAlbum } from "../../models";
import Album from "../Album/Album";

const getData = async (): Promise<Albums> => {
  const data = await Api.getAlbums();
  return data;
};

const AlbumsList = async (): Promise<ReactElement> => {
  const data = await getData();

  return (
    <div style={{ margin: "0 auto", padding: "25px" }}>
      <Flex wrap="wrap" gap="middle" justify="center" style={{ gap: "25px" }}>
        {data.map((album: IAlbum) => (
          <Album albumId={album.id} key={album.id} />
        ))}
      </Flex>
    </div>
  );
};

export default AlbumsList;
