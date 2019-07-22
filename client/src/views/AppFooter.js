import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5)
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150
  }
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="#" className={classes.icon}>
                  <img src="#" alt="Facebook" />
                </a>
                <a href="#" className={classes.icon}>
                  <img src="#" alt="Twitter" />
                </a>
                <a href="#" className={classes.icon}>
                  <img src="/src/assets/instagram.png" alt="Instagram" />
                </a>
              </Grid>
              <Grid item>© 2019 SosFood</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Informação
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/acesso">Acesso</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/cadastro">Cadastro</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/esqueceu-senha">Esqueceu Senha</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4} />
          <Grid item />
        </Grid>
      </Container>
    </Typography>
  );
}
