
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/responsive-sidebar";
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-flow: column;
    justify-content: center;
  }
`;

const DefaultLayout = () =>
  <Sidebar>
    <ResponsiveContainer>
      <Outlet />
    </ResponsiveContainer>
  </Sidebar>

export default DefaultLayout;
