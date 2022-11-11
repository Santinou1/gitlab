import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import CableRoundedIcon from "@mui/icons-material/CableRounded";
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

function AccordionCompound() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#000000", color: "#fff" }}
        icon={<CableRoundedIcon />}
      ></VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        iconStyle={{ background: "#0F426A", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Smart Sensor</b>
        </h3>
        <p>
          Instalacion <b>sin interrupcion</b> en el suministro de energia,
          utilizandose equipo ligero.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#0F426A", color: "#fff" }}

        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Smart Sensor</b>
        </h3>
        <p>
          Permite encontrar de <b>forma rapida y precisa</b> puntos de error en
          la red de energia.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#0F426A", color: "#fff" }}

        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          {" "}
          <b>Smart Sensor</b>
        </h3>
        <p>
          <b>Reduccion del tiempo</b> de restauracion de la energia y{" "}
          <b>reduccion de clientes afectados.</b>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#0F426A", color: "#fff" }}

        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          {" "}
          <b>Smart Sensor</b>
        </h3>
        <p>
          Caida de tiempo de <b>trabajo de las cuadrillas.</b>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#052944", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Snap Grid</b>
        </h3>
        <p>
          Plataforma para <b>estudios de redes electricas.</b>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#052944", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Snap Grid</b>
        </h3>
        <p>
          <b>Se integra</b> con los sistemas corporativos de las empresas.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#052944", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Snap Grid</b>
        </h3>
        <p>
          Software <b>escalable y modular.</b>
        </p>
      </VerticalTimelineElement>{" "}
    {/*   <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--education"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Snap Grid</b>
        </h3>
        <p>
          Reduce las perdidas{" "}
          <b>identificando el area donde ocurren las perdidas comerciales.</b>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: "rgb(0, 18, 32)", color: "#fff" }}
        className="vertical-timeline-element--education"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FiberManualRecordRoundedIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          <b>Snap Grid</b>
        </h3>
        <p>
          <b>Integracion</b> con Smart Sensor
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<CableRoundedIcon />}
      ></VerticalTimelineElement> */}
       <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#000000", color: "#fff" }}
        icon={<CableRoundedIcon />}
      ></VerticalTimelineElement> 
    </VerticalTimeline>
  );
}

export default AccordionCompound;
