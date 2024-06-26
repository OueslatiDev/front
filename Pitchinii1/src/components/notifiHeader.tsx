import {
  alpha,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";


// Inside your component


import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { subDays } from "date-fns";
import { get } from "../utilFunctions/getData";
import { modifyData } from "../utilFunctions/modifyData";
import { useNavigate } from "react-router-dom";

import {
  formatDistance,
  differenceInSeconds,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

const NotificationsBadge = styled(Badge)(

  ({ theme }) => `
      
      .MuiBadge-badge {
          background-color: ${alpha(theme.palette.error.main, 0.1)};
          color: ${theme.palette.error.main};
          min-width: 16px; 
          height: 16px;
          padding: 0;
  
          &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
              content: "";
          }
      }
  `
);
interface FrameComponentProps {
  userId: string;


}
const HeaderNotifications: FunctionComponent<FrameComponentProps> = ({ userId }) => {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notification, setNotification] = useState<any[]>([]); // Define domainAndSkills state

  const handleOpen = (): void => {
    setOpen(true);
    setClicked(true);
    setUnreadCount(0);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  useEffect(() => {
    async function fetchData() {

      const res = await get(
        `http://localhost:3001/api/notification/allUsernotifications/${userId}`
      );
      const values = await res;

      const notifications = values.map((item: any) => ({
        id: item.id,
        message: item.message,
        isRead: item.isRead,
        userId: item.userId,
        freelancerId: item.freelancerId,
        projectId: item.projectId
      }));
      // Sort notifications with isRead === 0 at the beginning
      notifications.sort((b: any, a: any) => b.isRead - a.isRead);

      setNotification(notifications);

      // Calculate unread count after setting notifications
      const UnreadCount = notifications.filter(
        (notification: any) => !notification.isRead
      ).length;
      setUnreadCount(UnreadCount);

    }

    fetchData();
    console.log(notification)
    console.log("hhyhyyhhyhyy")
  }, [userId]);

  async function updateNotificationStatus() {
    const unreadNotification = notification.filter(
      (notification) => !notification.isRead
    );
    for (let i = 0; i < unreadNotification.length; i++) {
      await modifyData(
        {
          message: unreadNotification[i].message,
          userId: unreadNotification[i].userId,
          isRead: 1,
        },
        `http://localhost:3001/api/notification/modifyNotification${unreadNotification[i].id}`
      );
    }
    // After updating notifications, recalculate the unread count
    const updatedNotifications = notification.map((item) =>
      unreadNotification.some((unread) => unread.id === item.id)
        ? { ...item, isRead: 1 }
        : item
    );
    setNotification(updatedNotifications);
    const updatedUnreadCount = updatedNotifications.filter(
      (notification) => !notification.isRead
    ).length;
    setUnreadCount(updatedUnreadCount);
  }
  if (clicked && !isOpen) {
    updateNotificationStatus();
    setClicked(false);
  }

 

  function handleProfileClick(id: number) {
    if (id != null) navigate(`/freelancerPortfolio/${id}`);
  }
  const getDuration = (creationDate: Date | null): string => {
    const currentDate = new Date();

    if (creationDate != null) {
      const distance =
        new Date(currentDate).getTime() - new Date(creationDate).getTime();
      const seconds = Math.floor(distance / 1000);

      if (seconds < 60) {
        return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
      } else if (seconds < 604800) {
        const days = Math.floor(seconds / 86400);
        return `${days} day${days !== 1 ? "s" : ""} ago`;
      } else {
        const weeks = Math.floor(seconds / 604800);
        return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
      }
    }
    return ""; // Return a default value when creationDate is null
  };
  const navigate = useNavigate();
  const handleSendMessage = async ({ userId, freelancerId, projectId }: { userId: string, freelancerId: string, projectId: string }) => {
    try {
      console.log("qqqqqqqqqqqqqqqqqqq")
        // Récupérer le nombre total de conversations
       
        // Vérifier si la conversation existe déjà
        const convCheckResponse = await fetch(`http://localhost:3001/api/userConversation/find/${userId}/${freelancerId}`);
        const convCheckData = await convCheckResponse.json();
        const conversationExists = convCheckData.conversationExists;
        console.log(convCheckData,"aoaoaoa")
        if (convCheckData) {
            // Rediriger vers la page de discussion existante
            navigate(`/discussion/${userId}`, {
                state: {},
            });
        } else {
          const response = await fetch("http://localhost:3001/api/Conversation/getConversationCount");
          const data = await response.json();
          const conversationCount = data.conversationCount;
          console.log(conversationCount,"vvvvvvvvvvvv" )
  
            // Ajouter la nouvelle conversation
            const conversationResponse = await fetch("http://localhost:3001/api/Conversation/addConversation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: conversationCount + 1,
                    conversationName: "New Conversation"
                }),
            });
            const conversation = await conversationResponse.json();

            // Ajouter la relation utilisateur-conversation
            await fetch("http://localhost:3001/api/userConversation/addUserConversation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    senderId: userId,
                    conversationId: conversation.id,
                    recipientId: freelancerId,
                }),
            });

            // Rediriger vers la page de discussion avec l'ID de la conversation nouvellement créée
           navigate(`/discussion/${userId}`, {
           state: {},
        });
        }
    } catch (error) {
        console.error("Erreur lors de l'envoi du message :", error);
    }
};



  return (
    <>
      <Tooltip arrow title="Notifications">
        <IconButton style={{ color: "black" }} ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            badgeContent={unreadCount}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsActiveIcon />
          </NotificationsBadge>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f1f1f1",
          }}
        >
          <Typography variant="h5">Notifications</Typography>
        </Box>

        <Divider />
        <List
          sx={{
            p: 0,
          }}
          className="md:w-[300px] w-[400px]"
        >
          {notification.map((item) => (
           
            <ListItem
            
              key={item.id}
              sx={{
                p: 2,
                minWidth: 350,
                display: { xs: "block", sm: "flex" },
              }}
            >
              <Box flex="1" className="md:mr-[50px] mr-[17px]">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: item.isRead ? "gray" : "red",
                    }}
                  >
                    {item.type}
                  </Typography>
                  <Typography variant="caption">
                    {getDuration(item.creationDate)}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  {item.message}
                </Typography>
                {/* Conditionally render buttons based on freelancerId */}
                {item.freelancerId && (
                  <Box mt={1}>
                    <Button
                      variant="outlined"
                      onClick={() => handleProfileClick(item.freelancerId)}
                      sx={{
                        ml: 1,
                        padding: "5px",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Check Profile
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleSendMessage({ userId: item.userId, freelancerId: item.freelancerId, projectId: item.projectId })}
                      sx={{
                        ml: 1,
                        padding: "5px",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Send Message
                    </Button>

                  </Box>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default HeaderNotifications;
