import React from 'react'

export default function DarkSwitch() {
  return (<>
    <container>
        <div class="form-check form-switch mx-6">
            <input class="form-check-input mx-6" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label mx-6" for="flexSwitchCheckDefault"Enable Dark Mode></label>
        </div>
    </container>
  </>
    
  )
}
