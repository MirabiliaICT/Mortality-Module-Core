import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import legendStyle from "./legendStyle";

export const styles = (theme) => ({
  legend: {
    ...legendStyle,
  },
});

// Renders a legend with alerts for one map layer
const LegendLayer = (props) => {
  const { acToggleMapClusters, classes } = props;
  return (
    <dl className={classes.legend}>
      <dt>Toggle Cluster</dt>
      <dd>
        <div
          onClick={acToggleMapClusters}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#ffffff",
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M14,4c1.105,0,2-0.895,2-2c0-1.105-0.895-2-2-2s-2,0.895-2,2c0,0.562,0.233,1.068,0.606,1.431l-1.578,2.761  C10.706,6.074,10.363,6,10,6C9.2,6,8.477,6.318,7.939,6.829L3.848,3.761C3.945,3.526,4,3.27,4,3c0-1.105-0.895-2-2-2S0,1.895,0,3  c0,1.105,0.895,2,2,2c0.472,0,0.9-0.17,1.242-0.443l4.102,3.077C7.131,8.045,7,8.505,7,9c0,0.313,0.062,0.61,0.151,0.894  L2.86,12.201C2.598,12.076,2.309,12,2,12c-1.105,0-2,0.895-2,2c0,1.105,0.895,2,2,2s2-0.895,2-2c0-0.406-0.123-0.783-0.331-1.099  l3.933-2.115C8.149,11.519,9.015,12,10,12c0.498,0,0.961-0.133,1.375-0.348l0.977,1.217C12.131,13.191,12,13.58,12,14  c0,1.105,0.895,2,2,2s2-0.895,2-2c0-1.105-0.895-2-2-2c-0.321,0-0.62,0.083-0.889,0.217l-0.934-1.164C12.684,10.516,13,9.797,13,9  c0-0.934-0.436-1.758-1.105-2.308l1.583-2.77C13.645,3.968,13.818,4,14,4z" />
          </svg>
        </div>
      </dd>
    </dl>
  );
};

LegendLayer.propTypes = {};

export default withStyles(styles)(LegendLayer);
