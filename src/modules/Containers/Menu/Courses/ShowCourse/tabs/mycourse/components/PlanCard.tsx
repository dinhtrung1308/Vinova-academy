import React, { useState } from "react"
import { Card, CardHeader, CardContent } from '@material-ui/core'
import { Texts } from 'modules/Components';
import themeConfig from 'config/theme';
import { useStyles } from "../styles";

const PlanCard = (props) => {
  const classes = useStyles()
  const { plan, activeStep, index, timelineType } = props
  const [shadow, setShadow] = useState(false)
  return (
    <Card 
      className={activeStep === index ? classes.planPending 
                  : activeStep > index? classes.planCompleted : classes.planNotCompleted}
      key={plan._id} 
      style={{minHeight: '180px'}}
      onMouseOver={() => setShadow(true)}
      onMouseOut={() => setShadow(false)}
      raised={shadow}
    > 
      <CardHeader disableTypography title={`${timelineType.toLocaleUpperCase()} ${index+1}`}/>
      <CardContent>
        <Texts 
          color={themeConfig.black} 
          size={themeConfig.fSize22}
        >
          {plan.title}
        </Texts>
      </CardContent>
    </Card>
  )
}

export default PlanCard;




