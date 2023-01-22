import React, { FC, ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid, Typography, Fade } from "@mui/material";
import { CircularProgressProps } from "@mui/material";

export interface LoaderProps extends CircularProgressProps {
  isLoading?: boolean;
  text?: string;
  children?: ReactNode;
}

const Loader: FC<LoaderProps> = (props) => {
  const { isLoading = true, text, children, ...others } = props;

  return (
    <>
      {isLoading ? (
        <>
          <Grid
            container
            direction="column"
            wrap="nowrap"
            justifyContent="center"
            alignItems="center"
            height={"100%"}
          >
            <Grid item>
              <CircularProgress {...others} />
            </Grid>
            {text && (
              <Grid item>
                <Typography variant="h6">{text}</Typography>
              </Grid>
            )}
          </Grid>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loader;
