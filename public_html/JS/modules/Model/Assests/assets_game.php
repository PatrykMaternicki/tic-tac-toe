<?php
echo "<section id='allGame'>";
echo "<p id='roundNow' class='roundFrame'></p>";
echo "<p id='whoTurn' class='roundFrame'></p>";
echo "<section class='playerInfo_left'>";
echo "<div id='imagePlayer' class='infoFrame'>";
echo "</div>";
echo "<div id='player1' class='infoFrame'>";
echo "</div>";
echo "<div id='winRounds' class='infoFrame'>";
echo "</div>";
echo "</section>";
echo "<table id='game' class='game_table'>";
for ($i=0 ; $i <= 2; $i++){
  if ($i == 2){
    echo "<tr>";
    echo "<td class='border border-bottom-inherit'></td><td class='border border-right-left border border-bottom-inherit'></td><td class='border border border-bottom-inherit' ></td>";
    echo "</tr>";
    continue;
  }
  echo "<tr>";
  echo "<td class='border'></td><td class='border border-right-left'></td><td class='border' ></td>";
  echo "</tr>";
}
echo "</table>";
echo "<section class='playerInfo_Right'>";
echo "<div id='imagePlayer2' class='infoFrame'>";
echo "</div>";
echo "<div id='player2' class='infoFrame'>";
echo "</div>";
echo "<div id='winRounds2' class='infoFrame'>";
echo "</div>";
echo "</section>";
echo "</section>";
 ?>
