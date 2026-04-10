import { Box } from '@mui/material'
import ProfileSection from '../profileSection/ProfileSection'
import SidebarMenu from './SidebarMenu'
import {SidebarContainer} from './Sidebar.styles'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Box>
        <ProfileSection />
        <SidebarMenu />
      </Box>

      
    </SidebarContainer>

  )
}

export default Sidebar
